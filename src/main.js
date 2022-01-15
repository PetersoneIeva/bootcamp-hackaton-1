document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const resetPasswordForm = document.querySelector("#resetPassword");

    document.querySelector("#linkResetPassword").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        resetPasswordForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkSignIn").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        resetPasswordForm.classList.add("form-hidden");
    });

});