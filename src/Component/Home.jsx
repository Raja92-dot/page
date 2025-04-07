import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="image/im2.jpeg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        <Link to="/login">
                            <button className="btn btn-outline-light" >Login</button></Link> 
                            <br />
                            <Link to="/signup">
                            <button className="btn btn-outline-light">Sign Up</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="image/im1.jpeg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        <Link to="/login">
                            <button className="btn btn-outline-light" >Login</button></Link> 
                            <br />
                            <Link to="/signup">
                            <button className="btn btn-outline-light">Sign Up</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="image/im4.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        <Link to="/login">
                            <button className="btn btn-outline-light" >Login</button></Link> 
                            <br />
                            <Link to="/signup">
                            <button className="btn btn-outline-light">Sign Up</button></Link>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div >

        </>
    )
}
export default Home;