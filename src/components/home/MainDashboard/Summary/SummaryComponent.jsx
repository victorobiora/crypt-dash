import classes from './SummaryComponent.module.css'

const SummaryComponent = props => {
    return <section className={classes.summaryContainer}>
        <div className={classes.summaryHeadings}>
            <div><h1>ACTIVITY SUMMARY</h1></div>
            <div><h1>SPENDING SUMMARY</h1></div>
            <div><h1>INCOME SUMMARY</h1></div>
        </div>
        
    </section>
};

export default SummaryComponent