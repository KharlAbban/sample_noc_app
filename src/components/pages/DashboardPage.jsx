import { useLoaderData } from "react-router-dom"

const DashboardPage = () => {
    // const loadedData = useLoaderData().replaceAll("\"","");

    return (
    <div className="">
      <h2 className="fw-bold mb-0">Ticket Dashboard</h2>
      <p className="fw-normal">
        {/* <span className="greeting">Good afternoon, {loadedData}</span> */}
        <span className="date float-end">Saturday, 13th January, 2024</span>
      </p>

      {/* <div class="something d-flex gap-3 mb-3">
        <div class="card card-body dashStatsCard ps-3 pe-1 py-1">
            <div class="help text-end">
                <img src="assets/media/ph_question-bold.svg" alt="" class="">
            </div>
            <div class="d-flex align-items-center gap-2">
                <span class="bullet bullet-completed"></span> Completed
            </div>
            <h3 class="display-6">2350</h3>
        </div>
        <div class="card card-body dashStatsCard ps-3 pe-1 py-1">
            <div class="help text-end">
                <img src="assets/media/ph_question-bold.svg" alt="" class="img-fluid">
            </div>
            <div class="d-flex align-items-center gap-2">
                <span class="bullet bullet-progress"></span> In Progress
            </div>
            <h3 class="display-6">3100</h3>
        </div>
        <div class="card card-body dashStatsCard ps-3 pe-1 py-1">
            <div class="help text-end">
                <img src="assets/media/ph_question-bold.svg" alt="" class="img-fluid">
            </div>
            <div class="d-flex align-items-center gap-2">
                <span class="bullet bullet-pending"></span> Pending
            </div>
            <h3 class="display-6">2350</h3>
        </div>
        <div class="card card-body dashStatsCard ps-3 pe-1 py-1">
            <div class="help text-end">
                <img src="assets/media/ph_question-bold.svg" alt="" class="img-fluid">
            </div>
            <div class="d-flex align-items-center gap-2">
                <span class="bullet bullet-cancelled"></span> Cancelled
            </div>
            <h3 class="display-6">124</h3>
        </div>
        <div class="card card-body dashStatsCard ps-3 pe-1 py-1">
            <div class="help text-end">
                <img src="assets/media/ph_question-bold.svg" alt="" class="img-fluid">
            </div>
            <div class="d-flex align-items-center gap-2">
                <span class="bullet bullet-total"></span> Total
            </div>
            <h3 class="display-6">5699</h3>
        </div>
    </div> */}

    </div>
  )
}

export default DashboardPage;