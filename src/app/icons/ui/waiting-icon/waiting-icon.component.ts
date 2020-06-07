import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "waiting-icon",
    templateUrl: "./waiting-icon.component.html",
    styleUrls: ["./waiting-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaitingIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
