import { Form, Input, Button, Select } from 'antd';
import React from "react";
import { useSelector,useDispatch } from 'react-redux'

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

  const dispatch = useDispatch();


  React.useEffect(()=>{
    dispatch(fetchDistance());
    dispatch(fetchBrand());
  },[])

  const [form] = Form.useForm();

  const onFinish = (values) => {
    //console.log(values);
    props.onSubmitForm(values);
    form.resetFields();


  };

  let brandOption = (brandList.brand.data) ? setOptions(brandList.brand.data, 'name') : []
  let distanceOption = (distanceList.distance.data) ? setOptions(distanceList.distance.data, 'id') : []


    return (
            <div className='form-layout' >
                    <Form {...layout} form={form} name="user-form" onFinish={onFinish}>
                            <Form.Item
                                name="name"
                                label="Hotel Name"
                                rules={[{ required: true,},]}>
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="location"
                                label="Hotel Location"
                                rules={[{ required: true,},]}>
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="distance"
                                label="Distance"
                                rules={[{ required: true,},]}>
                                <Select
                                    placeholder="Please select Distance"
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