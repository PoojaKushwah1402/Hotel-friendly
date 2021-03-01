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

const UserForm = props => {

  const distanceList = useSelector(state => state.distance);
  const brandList = useSelector(state => state.brand);

  const dispatchDistance = useDispatch();
  const dispatchBrand = useDispatch();


  React.useEffect(()=>{
    dispatchDistance(fetchDistance());
    dispatchBrand(fetchBrand());

  },[])

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    props.onSubmitForm(values);
    form.resetFields();
    console.log(brandList.brand)
    console.log(distanceList.distance )
    // dispatch(fetchBrand);
    // dispatch(fetchDistance);
  };

    return (
            <div className='form-layout' >
              <h1> hello{distanceList.distance + brandList.brand}</h1>


                    <Form {...layout} form={form} name="user-form" onFinish={onFinish}>
                            <Form.Item
                                name="name"
                                label="Hotel Name"
                                rules={[{ required: true,},]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                                name="location"
                                label="Hotel Location"
                                rules={[{ required: true,},]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="distance"
                                label="Distance"
                                rules={[{ required: true,},]}
                            >
                                <Select
                                placeholder="Please select Distance"
                                allowClear
                                >
                                <Option value="0km">0Km</Option>
                                <Option value="10km">10Km</Option>
                                <Option value="30">30km</Option>
                                </Select>
                            </Form.Item>


                            <Form.Item
                                name="brand"
                                label="Brands"
                                rules={[{ required: true,},]}
                            >
                                <Select
                                placeholder="Please select Brand"
                                allowClear
                                >
                                <Option value="flip">Flipkart</Option>
                                <Option value="amazon">Amazon</Option>
                                <Option value="paytm">Paytm</Option>
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