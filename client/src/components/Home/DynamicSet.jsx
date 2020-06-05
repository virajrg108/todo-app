import React from 'react';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

class DynamicFieldSet extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.getElementById("loadBtn").click();
  }
  onFinish = values => {
    this.props.handleEditLabel(values.names);
  };
  render() {
    return (
      <Form initialValues={['personal']} name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={this.onFinish}>
        <Form.List name="names">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <Form.Item
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? 'Passengers' : ''}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        {
                          required: false,
                          whitespace: false,
                          message: "Please input label's name or delete this field.",
                        },
                      ]}
                      noStyle
                    >
                      <Input placeholder="Label" style={{ width: '60%' }} />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        style={{ margin: '0 8px' }}
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    style={{ width: '60%' }}
                  >
                    <PlusOutlined /> Add field
                </Button>
                  <Button id="loadBtn"  style={{display: 'none'}} onClick={() => {
                    ['personal', 'work'].forEach(l => {
                      add(l);
                    });
                  }}>Load</Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
    )
  }
};

export default DynamicFieldSet;