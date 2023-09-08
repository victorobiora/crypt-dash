import ActivitySummary from './ActivitySummary';
import classes from './SummaryComponent.module.css'

const SummaryComponent = props => {
    return <section className={classes.summaryContainer}>
        <div className={classes.summaryHeadings}>
            <div><h5>ACTIVITY SUMMARY</h5></div>
            <div><h5>SPENDING SUMMARY</h5></div>
            <div><h5>INCOME SUMMARY</h5></div>
        </div>
        <ActivitySummary/>
        
    </section>
};

export default SummaryComponent