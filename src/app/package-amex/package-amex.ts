export class PackageAmex {
  response_body!: ResponseBody;
}

export class ResponseBody{
  data!: PackageAmexClass[];
  total_elements!: number;
}

/*
export class ResponseBodyEdit{
  response_body!: PackageAmexClass;
}*/

export class PackageAmexClass {
  id!: number;
  number!: string;
  customer!: string;
  courier_name!: string;
  origin!: string;
  observations!: string;
  safe!: string;
  country!: string;
  created_date!: Date;
  modified_date!: Date;
  created_by!: string;
  modified_by!: string;
  weight!: string;
  price!: string;
  width!: string;
  height!: string;
  length!: string;
  volumetric_weight!: string;
  received_by!: string;
}
