import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "chevron-right-icon",
    templateUrl: "./chevron-right-icon.component.html",
    styleUrls: ["./chevron-right-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChevronRightIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
