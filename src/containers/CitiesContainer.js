import React, { Component } from 'react';
import CityFilter from '../components/CityFilter';
import CityList from '../components/CityList';
import { connect } from 'react-redux';
import { fetchCities } from '../actions/cityActions';
import Loading from '../components/Loading';
import { Switch, Route } from 'react-router-dom';
import CityForm from '../components/CityForm';
import CityPage from '../components/CityPage';

class CitiesContainer extends Component {

    state = {
        search: ""
    }

    handleInputChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }  

    componentDidMount(){
        this.props.fetchCities();
    }


    render(){
        const foundCity = this.props.cities.find((city) => city.name.toLowerCase() === this.state.search.toLowerCase())
        return(
            <div id="cities-container">
              <Switch>
                <Route exact path="/cities/new" component={(routeInfo) => { 
                    return <CityForm goBack={() => routeInfo.history.push("/")} /> 
                 }} />

                <Route exact path="/cities" component={(routeInfo) => 
                    <>
                    <CityFilter search={this.state.search} handleInputChange={this.handleInputChange} goBack={() => routeInfo.history.push("/")}/>

                    {this.props.loading ? <Loading /> : <CityList cities={this.props.cities} foundCity={foundCity} searchTerm={this.state.search} /> }
                    </>
                }>
                  
                </Route>

                <Route path="/cities/:id" component={(routeInfo) => {
                    console.log(routeInfo)
                    const paramsId = parseInt(routeInfo.match.params.id) 
                    const singleCity = this.props.cities.find((city) => city.id === paramsId)
                    return <CityPage city={singleCity} />
                }}>

                </Route>

              
              </Switch>
            </div>
        )
    }

}

const mapStateToProps = (stateFromStore) => {
    return { 
      cities: stateFromStore.cities,
      loading: stateFromStore.loading,
      
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCities: (citiesData) => dispatch(fetchCities(citiesData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesContainer)