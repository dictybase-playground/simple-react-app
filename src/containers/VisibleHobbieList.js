import { connect } from 'react-redux'
import HobbieList from '../components/HobbieList'

//This container component is a bridge between Redux and "HobbieList" presentation component.
//It recieves a list of Hobbies from Redux and generates new array of Hobbies.

const getVisibleHobbies = (hobbies) => { 
      return hobbies
}

const mapStateToProps = (state) => ({
  hobbies: getVisibleHobbies(state.hobbies)
})

const VisibleHobbieList = connect(
  mapStateToProps
)(HobbieList)



export default VisibleHobbieList
