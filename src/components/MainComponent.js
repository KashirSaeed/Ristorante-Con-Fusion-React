import react, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Menu from './MenuComponent';
import Contact from "./ContactusComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterCompoent";
import { Switch, Route, Redirect, WithRouter, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addComment, fetchDishes, fetchComments, fetchPromotions   , fetchLeaders , postComment , postFeedback } from "../redux/ActionCreater";
import { actions } from "react-redux-form"; 
import { TransitionGroup , CSSTransition } from "react-transition-group"


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId1, rating1, author1, comment1) => dispatch(postComment(dishId1, rating1, author1, comment1)),
  postFeedback: (firstname , lastname , telnum , email , agree , contactType , message) => dispatch(postFeedback(firstname , lastname , telnum , email , agree , contactType , message)),
  fetchDishes: () => dispatch(fetchDishes()),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },

  fetchComments: () => dispatch(fetchComments()),
  fetchPromotions: () => dispatch(fetchPromotions()),
  fetchLeaders: () => dispatch(fetchLeaders())



})




class Main extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchPromotions();
    this.props.fetchComments();
    this.props.fetchLeaders();
  }




  render() {

    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((eachDish) => eachDish.featured)[0]}
          isLoadingDishes={this.props.dishes.isLoading}
          isErrorInDishes={this.props.dishes.errorMessage}

          promotion={this.props.promotions.promotions.filter((eachPromotion) => eachPromotion.featured)[0]}
          isLoadingPromotions={this.props.promotions.isLoading}
          isErrorInPromotions={this.props.promotions.errorMessage}

          leader={this.props.leaders.leaders.filter((eachLeader) => eachLeader.featured)[0]}
          isLoadingLeaders={this.props.leaders.isLoading}
          isErrorInLeaders={this.props.leaders.errorMessage}
        />
      )
    }

    const DishWithComents = ({ match }) => {
      return (
        <DishDetail
          dish={this.props.dishes.dishes.filter((eachDish) => eachDish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          isError={this.props.dishes.errorMessage}

          comments={this.props.comments.comments.filter((eachComment) => eachComment.dishId === parseInt(match.params.dishId, 10))}
          postComment={this.props.postComment}
          isErrorInComments={this.props.comments.errorMessage}
        />
      )
    }

    return (
      <div >
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} timeout={300} classNames="myPage" >
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithComents} />
            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders.leaders} isLoading={this.props.leaders.isLoading} isError = {this.props.leaders.errorMessage} />} />
            <Route exact path="/contactus" component={() => <Contact postFeedback={this.props.postFeedback}  resetFeedbackForm={this.props.resetFeedbackForm} />} />
            <Redirect to="/home" />
          </Switch>
          </CSSTransition>
          </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default (withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)));
