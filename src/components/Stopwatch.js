import Button from "./UI-components/Button";

export default function Stopwatch() {
  return (
    <>
      <div className="stopwatch">
        <div>
          <span>00:00:00</span>
        </div>
        <div>
          <Button> + </Button>
          <Button> start </Button>
          <Button> stop </Button>
          <Button> lap </Button>
          <Button> reset </Button>
          <Button> - </Button>
        </div>
        <div className="time-laps"></div>
      </div>
    </>
  );
}
