import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "update-icon",
    templateUrl: "./update-icon.component.html",
    styleUrls: ["./update-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
