import { Tarticle } from "@/features/posts/formationSlice";
import { X } from "lucide-react";
import { Field, Form, Formik } from "formik";
import z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { setModal } from "@/features/modal/modalSlice";

const schema = z.object({
  formation: z.string(),
  username: z.string({ required_error: "Votre nom et prénom sont requis" }),
  email: z.string({ required_error: "Votre adresse mail est requise" }).email(),
  society: z.string({ required_error: "Votre société est requise" }),
  participants: z.number(),
  addresse: z.string({ required_error: "Votre adresse est requise" }),
  zipCode: z.string({ required_error: "Votre code postal est requis" }),
  presence: z.string({
    required_error: "Vous devez choisir un mode préférentiel",
  }),
  message: z.string().optional(),
  consent: z
    .boolean()
    .refine((v) => v, { message: "Vous devez accepter les conditions" }),
});

const initialValues = {
  username: "",
  email: "",
  society: "",
  participants: 1,
  addresse: "",
  zipCode: "",
  presence: "",
  message: "",
  consent: false,
};

const ContactModal = ({ formation }: { formation: Tarticle[] }) => {
  const data = formation[0];
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal.data);

  return (
    <>
      {modal && (
        <section className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white/[86%]">
          <div className="relative h-fit w-fit">
            <div className="absolute bottom-[-15px] right-[-20px] h-full w-full rounded-[85px] border border-blue bg-white"></div>
            <div className="relative w-fit rounded-[85px] bg-blue px-[85px] py-[47px] text-white">
              <X
                className="absolute right-10 top-5 cursor-pointer"
                onClick={() => dispatch(setModal(false))}
              />
              <h2 className="mx-auto text-center text-xl font-normal leading-none">
                Information du / des participants à la formation :
              </h2>
              <strong className="mx-auto mb-[49px] flow-root w-fit text-center text-md font-normal">
                {data.title}
              </strong>
              <Formik
                initialValues={initialValues}
                validationSchema={toFormikValidationSchema(schema)}
                onSubmit={(values) => alert(JSON.stringify(values))}
              >
                {({ errors, touched }) => (
                  <Form className="grid grid-cols-2 gap-x-[24px] gap-y-[18px]">
                    <div>
                      <Field
                        placeholder="Votre nom / Prénom*"
                        className={`${
                          errors.username && touched.username
                            ? "border-red"
                            : "border-white"
                        } font-regular w-full rounded-32 border bg-white px-[28px] py-[14px] text-sm text-blue placeholder:text-blue`}
                        name="username"
                      />
                      {errors.username && touched.username && (
                        <p className="ml-[20px] mt-[5px] text-red-700">
                          {errors.username}
                        </p>
                      )}
                    </div>
                    <div>
                      <Field
                        placeholder="Email*"
                        className={`${
                          errors.username && touched.username
                            ? "border-red"
                            : "border-white"
                        } font-regular w-full rounded-32 bg-white px-[28px] py-[14px] text-sm text-blue placeholder:text-blue`}
                        type="email"
                        name="email"
                      />
                      {errors.email && touched.email && (
                        <p className="ml-[20px] mt-[5px] text-red-700">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <Field
                        placeholder="Société*"
                        className={`${
                          errors.username && touched.username
                            ? "border-red"
                            : "border-white"
                        } font-regular w-full rounded-32 bg-white px-[28px] py-[14px] text-sm text-blue placeholder:text-blue`}
                        name="society"
                      />
                      {errors.society && touched.society && (
                        <p className="ml-[20px] mt-[5px] text-red-700">
                          {errors.society}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-center gap-[63px]">
                      <label htmlFor="Participants">
                        Nombre de participant(s)
                      </label>
                      <Field
                        className={`${
                          errors.username && touched.username
                            ? "border-red"
                            : "border-white"
                        } font-regular w-full max-w-[90px] rounded-32 bg-white px-[28px] py-[14px] text-sm text-blue placeholder:text-blue`}
                        type="number"
                        name="participants"
                        min="1"
                      />
                      {errors.participants && touched.participants && (
                        <p className="ml-[20px] mt-[5px] text-red-700">
                          {errors.participants}
                        </p>
                      )}
                    </div>
                    <div>
                      <Field
                        className={`${
                          errors.zipCode && touched.zipCode
                            ? "border-red"
                            : "border-white"
                        } font-regular w-full rounded-32 bg-white px-[28px] py-[14px] text-sm text-blue placeholder:text-blue`}
                        placeholder="Adresse*"
                        name="zipCode"
                      />
                      {errors.zipCode && touched.zipCode && (
                        <p className="ml-[20px] mt-[5px] text-red-700">
                          {errors.zipCode}
                        </p>
                      )}
                    </div>
                    <div className="col-span-2 mx-auto grid w-fit grid-cols-[281px_1fr] items-center justify-items-center gap-[50px]">
                      <p className="flow-root text-sm font-normal">
                        Mode de formation préférentiel* :{" "}
                      </p>
                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="presentiel"
                          className="mr-[47px] flex items-center justify-center gap-[10px] text-sm font-normal"
                        >
                          <Field
                            className={`${
                              errors.username && touched.username
                                ? "border-red"
                                : "border-white"
                            } font-regular rounded-32 bg-white px-[28px] py-[14px] text-sm text-blue placeholder:text-blue`}
                            type="radio"
                            name="presence"
                            id="presentiel"
                            value="Présentiel"
                          />
                          Présentiel
                        </label>
                        <label
                          htmlFor="distanciel"
                          className="mr-[47px] flex items-center justify-center gap-[10px] text-sm font-normal"
                        >
                          <Field
                            className={`${
                              errors.username && touched.username
                                ? "border-red"
                                : "border-white"
                            } font-regular rounded-32 bg-white px-[28px] py-[14px] text-sm text-blue placeholder:text-blue`}
                            type="radio"
                            name="presence"
                            id="distanciel"
                            value="Distanciel"
                          />
                          Distanciel
                        </label>
                        <label
                          htmlFor="sansPreference"
                          className="flex items-center justify-center gap-[10px] text-sm font-normal"
                        >
                          <Field
                            className={`${
                              errors.username && touched.username
                                ? "border-red"
                                : "border-white"
                            } font-regular rounded-32 bg-white px-[28px] py-[14px] text-sm text-blue placeholder:text-blue`}
                            type="radio"
                            name="presence"
                            id="sansPreference"
                            value="Sans préférence"
                          />
                          Sans préférence
                        </label>
                        {errors.presence && touched.presence && (
                          <p className="ml-[20px] mt-[5px] text-red-700">
                            {errors.presence}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <Field
                        className={`${
                          errors.username && touched.username
                            ? "border-red"
                            : "border-white"
                        } font-regular min-h-[169px] w-full rounded-32 bg-white px-[28px] py-[14px] text-sm text-blue placeholder:text-blue`}
                        as="textarea"
                        name="message"
                        placeholder="Informations complémentaires (secteur d'activité, date souhaitée, etc.)"
                      />
                      {errors.message && touched.message && (
                        <p className="ml-[20px] mt-[5px] text-red-700">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <div className="col-span-2 flex items-center gap-[10px]">
                      <Field
                        className={`${
                          errors.username && touched.username
                            ? "border-red"
                            : "border-white"
                        } font-regular rounded-32 bg-white px-[28px] py-[14px] text-sm text-blue placeholder:text-blue`}
                        type="checkbox"
                        name="consent"
                        id="consent"
                        placeholder="Informations complémentaires (secteur d'activité, date souhaitée, etc.)"
                      />
                      <label htmlFor="consent" className="font-sm text-regular">
                        J’accepte que mes informations soient traitées et
                        conservées dans le cadre de ma demande de formation.
                      </label>
                      {errors.consent && touched.consent && (
                        <p className="ml-[20px] mt-[5px] text-red-700">
                          {errors.consent}
                        </p>
                      )}
                    </div>
                    <input
                      type="submit"
                      value="Envoyer ma demande"
                      className="col-span-2 h-fit w-fit cursor-pointer justify-self-end rounded-32 border border-yellow bg-yellow px-[25px] py-[15px] text-[26px] font-bold leading-snug text-black duration-300 ease-in-out hover:bg-transparent hover:text-yellow"
                    />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactModal;
