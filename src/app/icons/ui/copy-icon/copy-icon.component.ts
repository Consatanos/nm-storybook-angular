import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "copy-icon",
    templateUrl: "./copy-icon.component.html",
    styleUrls: ["./copy-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CopyIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
