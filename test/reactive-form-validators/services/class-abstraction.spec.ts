
import { ReactiveFormConfig, RxFormBuilder, IFormGroup,RxFormGroup, FormGroupExtension} from '../../../packages/reactive-form-validators';


import { RxFormControl, required } from    '../../../packages/reactive-form-validators'; 


export class Record{
    @required()
    name:string;
  }
  
  export class Order extends Record  {
      id: number;
      tenantId: number;
      @required() lineItem:string ;
  }



(function(){
 describe('class abstraction',()=>{
     let formbuilder = new RxFormBuilder();
     
  it('should pass, current class property should be defined as RxFormControl',()=>{
    let userFormGroup = formbuilder.formGroup(Order)
      
      expect(userFormGroup.controls.lineItem instanceof RxFormControl).toBe(true);
     })

     it('should pass, extended class property should be defined as RxFormControl',()=>{
        let userFormGroup = formbuilder.formGroup(Order)
          expect(userFormGroup.controls.name instanceof RxFormControl).toBe(true);
         })




})
})();