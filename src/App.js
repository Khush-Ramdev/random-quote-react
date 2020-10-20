import React from 'react';
import './App.scss'

let quotes = require('./quotes.json');
class RandomQuote extends React.Component {
    state = {
        quote: quotes,
        selectedAuthor: undefined,
        selectedQuote: undefined
    }
    handleQuotePicker = () => {
        const random = Math.floor(Math.random() * this.state.quote.length)
        const optionText = this.state.quote[random];
        // alert(optionText);
        this.setState(() => ({
            selectedAuthor: optionText.author,
            selectedQuote: optionText.quote
        })
        )
    }
    componentDidMount() {
        this.handleQuotePicker();
    }
    render() {
        return (
            <div  className="wrapper-container">
                <div>Random Quote Machine</div>
                <div id="quote-box">
                    <div className="quote-wrapper">
                        <div id="text">
                            {this.state.selectedQuote}
                        </div>
                        <div id="author">
                            {"- " + this.state.selectedAuthor}
                        </div>
                    </div>
                    <div className="options">
                        <div className="sharing-options">
                            <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.state.selectedQuote}-${this.state.selectedAuthor}`} target="blank">
                                <i className="fab fa-twitter-square fa-lg icon"></i>
                            </a>
                            <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&+${this.state.selectedAuthor}'&content='+${this.state.selectedQuote}-+${this.state.selectedAuthor}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`} target="blank">
                                <i className="fab fa-tumblr-square fa-lg icon"></i>
                            </a>
                        </div>
                        <div   >
                            <button id="new-quote" className="btn btn-dark btn-lg" onClick={this.handleQuotePicker}>
                                new Quote
                        </button>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default RandomQuote;