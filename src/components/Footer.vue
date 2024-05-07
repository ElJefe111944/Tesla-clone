<template>
    <div class="footer-container">
        <div class="footer-disclaimer">
            <p>
                This website is designed as an educational project and serves as a clone of Tesla's official site as of May 7, 2024. It is not affiliated with, sponsored by, or endorsed by Tesla, Inc. All content, trademarks, and logos used here are for educational purposes only and remain the property of their respective owners. This site is intended to demonstrate web development skills and is not meant for commercial use or to mislead visitors regarding its affiliation with the Tesla brand.
            </p>
        </div>
        <div class="footer-links">
            <div class="copyright">
                Tesla Clone &#169; 2024
            </div>
            <div class="links">
                <a href="#">Privacy & Legal</a>
                <a href="#">Contact</a>
                <a href="#">News</a>
                <a href="#">Get Updates</a>
                <a href="#">Location</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 10px 15%;
    background-color: #000;
    color: #c7c2c2;
}
.footer-disclaimer p {
    font-size: 12px;
    text-align: center;
    width: 70%;
    margin: auto;
}
.footer-links {
    display: flex;
    gap: 15px;
    font-size: 12px;
    margin-top: 15px;
    margin-bottom: 15px;
    white-space: nowrap;
}

.footer-links a {
    color: #c7c2c2;
    text-decoration: none;
    margin-right: 12px;
    white-space: nowrap;
}
@media(max-width: 768px) {
    .footer-disclaimer p {
        display: none;
    }
    .footer-links {
        flex-direction: column;
        align-items: center;
}
}
</style>