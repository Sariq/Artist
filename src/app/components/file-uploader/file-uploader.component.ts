import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'file-uploader',
    templateUrl: './file-uploader.component.html',
    styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {
    @Input() minFilesCount: Number;
    @Input() maxFilesCount: Number;
    @Input() validate: Number;
    @Input() allowedFilesFormat: string[];

    @Output()
    filesUpdated: EventEmitter<any> = new EventEmitter<any>();

    isHovering: boolean;
    files: File[] = [];
    isValid: boolean = false;

    checkBoxList: any = {
        fullRights: false
    }
    toggleHover(event: boolean) {
        this.isHovering = event;
    }
    selectFiles(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            this.files.push(event.target.files.item(i));
        }
        this.onFilesUpdate();
    }
    onDrop(filesList: any) {
        let files:any = Array.from(filesList).filter( (s:any)=> this.allowedFilesFormat.indexOf(s.type) > -1);
        for (let i = 0; i < files.length; i++) {
            if(this.files.length < this.maxFilesCount){
                this.files.push(files[i]);
            }else{
                break;
            }
        }
        this.onFilesUpdate();
    }
    onFilesUpdate() {
        this.isValid = this.files.length >= this.minFilesCount && this.files.length <= this.maxFilesCount;
        this.filesUpdated.emit({ valid: this.isValid, files: this.files });
    }
    onRemoveFile(selectedFile: File) {
        this.files = this.files.filter(file => file.name !== selectedFile.name);
        this.onFilesUpdate();
    }
    showFilesList() {
        return this.files && this.files.length > 0;
    }
}