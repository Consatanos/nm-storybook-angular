import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "upload-icon",
    templateUrl: "./upload-icon.component.html",
    styleUrls: ["./upload-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
