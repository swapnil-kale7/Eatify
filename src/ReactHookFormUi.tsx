import {useForm, useFormState} from "react-hook-form";

interface Istudent{
    name:string;
    password:string;
    email:string;
}

export default function ReactHookFormUi(){
    //react hook form
    const{register,handleSubmit,formState,reset}=useForm<Istudent>();
    const onSubmit=(data:Istudent)=>{
        alert(data.name);
    }

    return(
        <form>
            <input type="text" placeholder="name" {...register("name",{
                required:true,
                minLength:{value:4,message:"name is min 4"}
            })}/>
            <input type="email" placeholder="Email" {...register("email",{
                required:true,
                pattern:{value:/[\w.]+@\w.[\w.]+/,message:"Email pattern not matching"}
            })}/>
            <input type="password" placeholder="password" {...register("password",{
                required: { value: true, message: "password required" },
                minLength:{value:4,message:"name is min 4"}
            })}/>
            <button onClick={handleSubmit(onSubmit)}>submit</button>
            <button onClick={()=>reset()}>reset</button>
            {formState.errors?.name?.message && <div>{formState.errors?.name?.message}</div>}
            {formState.errors?.password?.message && <div>{formState.errors?.password?.message}</div>}
            {formState.errors?.email?.message && <div>{formState.errors?.email?.message}</div>}
        </form>
    )
}