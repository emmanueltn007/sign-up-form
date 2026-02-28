function Form () {
    return (
        <section>
            <div>
                <p>
                    <span>
                        Try it free 7 days
                    </span>
                    then $20/mo. thereafter
                </p>
            </div>
            <form 
                noValidate
                className="flex flex-col"
            >
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button>
                    CLAIM YOUR FREE TRIAL
                </button>
            </form>
        </section>
    );
}

export default Form