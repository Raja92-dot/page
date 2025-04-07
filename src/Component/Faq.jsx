function Faq() {
    return (
        <>
            {/* FAQ 2 - Bootstrap Brain Component */}
            <section className="bsb-faq-2 bg-light py-3 py-md-5 py-xl-8">
                <div className="container">
                    <div className="row gy-5 gy-lg-0">
                        <div className="col-12 col-lg-6">
                            <h2 className="h1 mb-3">
                                How can we help you? Unlocking possibilities for your web hosting
                                FAQs answered.{" "}
                            </h2>
                            <p className="lead fs-4 text-secondary mb-4">
                                We hope you have found an answer to your question. If you need any
                                help, please search your query on our Support Center or contact us
                                via email.
                            </p>
                            <a href="FAQs" className="btn btn-lg bsb-btn-2xl btn-primary">
                                All FAQ
                            </a>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row justify-content-xl-end">
                                <div className="col-12 col-xl-11">
                                    <div className="accordion accordion-flush" id="accordionExample">
                                        <div className="accordion-item mb-4 shadow-sm">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button
                                                    className="accordion-button bg-transparent fw-bold"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    How Do I Change Information?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        To change your information, please follow these steps:
                                                    </p>
                                                    <ul>
                                                        <li>Go to our website and sign in to your account.</li>
                                                        <li>
                                                            Click on your profile picture in the top right corner
                                                            of the page and select "Account Settings."
                                                        </li>
                                                        <li>
                                                            Under the " Information" section, click on "Edit."
                                                        </li>
                                                        <li>Make your changes and click on "Save."</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-4 shadow-sm">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button
                                                    className="accordion-button collapsed bg-transparent fw-bold"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    How Does Payment System Work?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseTwo"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                            >
                                                <div className="accordion-body">
                                                    A payment system is a way to transfer money from one
                                                    person or organization to another. It is a complex process
                                                    that involves many different parties, including banks,
                                                    credit card companies, and merchants.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-4 shadow-sm">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button
                                                    className="accordion-button collapsed bg-transparent fw-bold"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Will taxes be included in my monthly invoice?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingThree"
                                            >
                                                <div className="accordion-body">
                                                    Whether or not taxes are included in your monthly invoice
                                                    depends on a number of factors, including your location,
                                                    the type of services you are receiving, and the policies
                                                    of the company providing you with those services.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-4 shadow-sm">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button
                                                    className="accordion-button collapsed bg-transparent fw-bold"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseFour"
                                                    aria-expanded="false"
                                                    aria-controls="collapseFour"
                                                >
                                                    What currency will I be charged in?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseFour"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingFour"
                                            >
                                                <div className="accordion-body">
                                                    The currency you are charged in when making a purchase
                                                    will depend on a number of factors, including the merchant
                                                    you are purchasing from, the country you are purchasing
                                                    from, and the payment method you are using.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item shadow-sm">
                                            <h2 className="accordion-header" id="headingFive">
                                                <button
                                                    className="accordion-button collapsed bg-transparent fw-bold"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseFive"
                                                    aria-expanded="false"
                                                    aria-controls="collapseFive"
                                                >
                                                    How Do I Cancel My Account?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseFive"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingFive"
                                            >
                                                <div className="accordion-body">
                                                    <p>To cancel your account, please follow these steps:</p>
                                                    <ul>
                                                        <li>Go to our website and sign in to your account.</li>
                                                        <li>
                                                            Click on your profile picture in the top right corner
                                                            of the page and select "Account Settings."
                                                        </li>
                                                        <li>
                                                            Scroll to the bottom of the page and click on "Cancel
                                                            Account."
                                                        </li>
                                                        <li>
                                                            Enter your password and click on "Cancel Account."
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}
export default Faq;