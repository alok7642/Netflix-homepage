
export function NetflixHeader() {
    return (
        <header >
            <div className='d-flex justify-content-between py-2 '>
                <div className='h1 text-danger'>NETFLIX</div>
                <div className='d-flex'>
                    <div>
                        <span className="bi bi-language"></span>
                        <select className='form-select' >
                            <option value="English">English</option>
                            <option value="Hindi">हिन्दी</option>
                            <option value="Sanskrit">Sanskrit</option>
                        </select>
                    </div>
                    <div >
                        <button className="btn btn-danger mx-2">Sign In</button>
                    </div>
                </div>
            </div>

        </header>
    )
}