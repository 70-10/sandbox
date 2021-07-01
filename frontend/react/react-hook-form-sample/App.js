import React from "react";
import useForm from "react-hook-form";

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <h1>React Hook Form Sample</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label>name</label>
        </p>
        <input type="text" name="name" ref={register({ required: true })} />
        {errors.name && <p>Name is required</p>}

        <p>
          <label>age</label>
        </p>
        <input name="age" ref={register({ pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}

        <input type="submit" />
      </form>
    </div>
  );
};
