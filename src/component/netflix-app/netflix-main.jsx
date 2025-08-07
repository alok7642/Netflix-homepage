
export function NetflixMain() {
    return (
        <main className="mt-4 ">

            <div className="my-2 text-center">Ready to watch? Enter your email to create or restart your membership.</div>
            <div className="input-group input-group-lg d-flex justify-content-center">
                <div><input className="form-control" type="email" placeholder="Email address" /></div>
                <div> <button className="btn btn-danger fw-bold mx-2">Get Started <span className="bi bi-chevron-right"></span></button>
                </div>
            </div>

        </main>

    )
}