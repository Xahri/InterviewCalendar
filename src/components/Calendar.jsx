import Header from "./Header/Header";
import Grid from "./Grid/Grid";
import Footer from "./Footer/Footer";

export default function Calendar() {
    const currentDate = new Date();
    return (
        <div className="Calendar">
            <div style={{width: '740px'}}>
                <Header date={currentDate} />
                <Grid />
                <Footer />
            </div>
        </div>
    )
}
