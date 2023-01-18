import React from 'react'

export default function Notfound() {
    return (        
        <div className="row justify-content-center">
            <div className="col-lg-4">
                <div className="text-center">
                    <img src="/images/file-searching.svg" height="90" alt="File not found Image" />

                    <h1 className="text-error mt-4">404</h1>
                    <h4 className="text-uppercase text-danger mt-3">Page Not Found</h4>
                    <p className="text-muted mt-3">
                        It's looking like you may have taken a wrong turn. 
                        Don't worry... it happen.
                    </p>
                </div>
            </div>
        </div>
    )
}
