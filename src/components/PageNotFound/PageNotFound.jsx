import "./PageNotFound.css";

function PageNotFound() {
    return (
        <div className="not-found">
            <h3 className="not-found__title">
                <span>404</span> - Page Not Found!
            </h3>
            <p className="not-found__text"> 
             uh oh! There&apos;s nothing here...Sorry. 
            </p>
        </div>
    );
}

export default PageNotFound;