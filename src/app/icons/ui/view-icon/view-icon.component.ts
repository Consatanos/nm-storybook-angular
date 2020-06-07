import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "view-icon",
    templateUrl: "./view-icon.component.html",
    styleUrls: ["./view-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
