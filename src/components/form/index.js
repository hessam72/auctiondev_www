import React from "react";
import PropTypes from "prop-types";
import { map, chunk, get } from "lodash";
import Maker from "./maker";
import { Row, Col } from "antd";

export default function AppForm({ loading, form, Form, columns }) {

  return (
    <Form
      form={form}
      loading={loading}
      layout="vertical"
      name="form_in_modal"
      initialValues={{
        modifier: "public",
      }}
    >
      {get(columns,"items",[]).length > 4 ? (
        <>
          {map(chunk(columns.items, 2), (items, index) => {
            return (
              <Row gutter={[8, 8]} key={`maker${index}`}>
                {map(items, (item, i) => (
                  <Col key={`maker${index}${i}`} span={12}>
                    <Maker
                      form={form}
                      FormItem={Form.Item}
                      key={`maker${index}${i}`}
                      item={item}
                    />
                  </Col>
                ))}
              </Row>
            );
          })}
        </>
      ) : (
        <>
          {map(columns.items, (item, index) => (
            <Maker
              form={form}
              FormItem={Form.Item}
              key={`maker${index}`}
              item={item}
            />
          ))}
        </>
      )}
    </Form>
  );
}

AppForm.propTypes = {
  columns: PropTypes.object.isRequired,
  form: PropTypes.any.isRequired,
  Form: PropTypes.any.isRequired,
};
