import { NgxSpinnerService} from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(spinnerNameType: SpinnerType) {
    this.spinner.show(spinnerNameType);

    //setTimeout(() => this.hideSpinner(spinnerNameType), 1000);
  }

  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinner.hide(spinnerNameType);
  }
}

export enum SpinnerType {
  BallAtom = "ball-atom",
  BallFussion = "ball-fussion",
  BallNewtonCradle = "ball-newton-cradle",
  BallRunningDots = "ball-running-dots",
  BallScaleMultiple = "ball-scale-multiple",
  BallSpinFadeRotating = "ball-spin-fade-rotating",
  LineScaleParty = "line-scale-party",
  LineSpinFadeRotating = "line-spin-fade-rotating",
  Pacman = "pacman",
  Timer = "timer"
}

