import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "download-icon",
    templateUrl: "./download-icon.component.html",
    styleUrls: ["./download-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
