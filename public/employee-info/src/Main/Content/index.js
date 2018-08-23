import React from 'react';
import './index.css';
import WrapperSearchForm from '../WrapperSearchForm';
import ResultTable from '../ResultTable';

class Content extends React.Component{
  queryInfor = (opts) => {
    // console.log('this is Content')
    // console.log(employee)
    const employee = {}
    for(let i in opts){
      if(opts[i]){
        employee[i] = opts[i]
      }
    }
    console.log('this is content',employee)
  }
  render(){
    return (
      <div className="content">
        <WrapperSearchForm queryInfor={this.queryInfor}/>
        <ResultTable />
      </div>
    )
  }
}

export default Content;