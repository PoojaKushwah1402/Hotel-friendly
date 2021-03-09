import { Form, Input, Button, Select } from 'antd';
import React from "react";
import { useSelector,useDispatch } from 'react-redux'
import { useState } from "react";
import { useParams } from "react-router-dom";



import { fetchDistance } from "../redux/distanceAction";
import { fetchBrand } from "../redux/brandAction";


const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 10,
  },
};

const setOptions = (data, subject) => {
  return (data.map( item => <Option value={item[subject]} key={item.id}> {item[subject]}</Option>))
}

const UserForm = props => {

  const distanceList = useSelector(state => state.distance);
  const brandList = useSelector(state => state.brand);
  const [userDetails, setUserDetails] = useState({})


  const dispatch = useDispatch();


  React.useEffect(()=>{
    dispatch(fetchDistance());
    dispatch(fetchBrand());
    setUserDetails(props.match.params)
  },[])



  const [form] = Form.useForm();

  const onFinish = (values) => {
    props.history.push('/')
    props.onSubmitForm(values);
    form.resetFields();
    setUserDetails({})
  };

  const ifExists = data => (data)?data+'/' :' /'
  
  const buildURL = data => {
     let url =''
     console.log(data)
     console.log('here check')
    url = ifExists(data.name) + ifExists(data.location)  ;
    console.log(url)
    return url;
  }
 
  const onInputChange = (value, key) => {
    //console.log(value, key)
    let temp = userDetails;
    temp[key] = value;
    setUserDetails(temp)
   let url = buildURL(temp)
    //console.log('url will be',url)
    props.history.push('/')
    props.history.push(url)
  }


  let brandOption = (brandList.brand.data) ? setOptions(brandList.brand.data, 'name') : []
  let distanceOption = (distanceList.distance.data) ? setOptions(distanceList.distance.data, 'id') : []


    let name = props.match.params.name;
    let location = props.match.params.loaction;


    return (
            <div className='form-layout' >
                    <Form {...layout} form={form} name="user-form" onFinish={onFinish}>
                            <Form.Item
                                initialValue={name}
                                name="name"
                                label="Hotel Name"
                                rules={[{ required: true,},]}>
                                <Input  placeholder="Please  Distance" onChange={(e)=> onInputChange(e.target.value, 'name')} />
                            </Form.Item>
 
                             <Form.Item
                                name="location"
                                label="Hotel Location"
                                initialValue={location}
                                rules={[{ required: true,},]}>
                                <Input   onChange={(e)=> onInputChange(e.target.value, 'location')}  />
                            </Form.Item>

                            <Form.Item
                                name="distance"
                                label="Distance"
                                rules={[{ required: true,},]}>
                                <Select
                                    placeholder="Please select Distance"
                                    onChange={(value)=>onInputChange(value,'distance')}
                                    allowClear>
                                    {distanceOption}
                                </Select>
                            </Form.Item>


                            <Form.Item
                                name="brand"
                                label="Brands"
                                rules={[{ required: true,},]}>
                                <Select
                                    placeholder="Please select Brand"
                                    onChange={(value)=>onInputChange(value,'brand')}
                                    value={userDetails.brand}  
                                    allowClear>
                                    {brandOption}
                                </Select>
                            </Form.Item>


                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                        
                            </Form.Item> 
                    </Form>
            </div>
    );
};


export default UserForm;