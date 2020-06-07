import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "doc-icon",
    templateUrl: "./doc-icon.component.html",
    styleUrls: ["./doc-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
