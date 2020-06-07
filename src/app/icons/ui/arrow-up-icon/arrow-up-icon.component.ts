import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "arrow-up-icon",
    templateUrl: "./arrow-up-icon.component.html",
    styleUrls: ["./arrow-up-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowUpIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
