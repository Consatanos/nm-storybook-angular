import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "cross-icon",
    templateUrl: "./cross-icon.component.html",
    styleUrls: ["./cross-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrossIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
