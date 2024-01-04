import { Tarticle } from "@/features/posts/formationSlice";
import { X } from "lucide-react";
import { Field, Form, Formik } from "formik";
import z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { setModal } from "@/features/modal/modalSlice";
import axios from "axios";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const schema = z.object({
  formation: z.string(),
  username: z.string({ required_error: "Votre nom et prénom sont requis" }),
  email: z.string({ required_error: "Votre adresse mail est requise" }).email(),
  society: z.string({ required_error: "Votre société est requise" }),
  participants: z.number(),
  zipCode: z.string({ required_error: "Votre code postal est requis" }),
  presence: z.string({
    required_error: "Vous devez choisir un mode préférentiel",
  }),
  message: z.string().optional(),
  consent: z
    .boolean()
    .refine((v) => v, { message: "Vous devez accepter les conditions" }),
});

const ContactModal = ({ formation }: { formation: Tarticle[] }) => {
  const data = formation[0];
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal.data);
  const [status, setStatus] = useState<number | null>(null);

  const initialValues = {
    formation: data.title,
    username: "",
    email: "",
    society: "",
    participants: 1,
    zipCode: "",
    presence: "",
    message: "",
    consent: false,
  };

  const handleSubmit = async (values: typeof initialValues) => {
    const payload = new FormData();
    payload.set("formation", values.formation);
    payload.set("username", values.username);
    payload.set("email", values.email);
    payload.set("society", values.society);
    payload.set("participants", values.participants.toString());
    payload.set("zipCode", values.zipCode);
    payload.set("presence", values.presence);
    payload.set("message", values.message);
    payload.set("consent", values.consent.toString());

    try {
      const response = await axios.post(
        "https://admin.btg-communication-dev.com/wp-json/contact-form-7/v1/contact-forms/60/feedback",
        payload,
      );
      setStatus(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {modal && (
        <section className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-x-hidden overflow-y-scroll bg-white/[86%]">
          <div className="md:mt-0 relative mx-auto mt-[100px] h-fit w-fit max-w-[90%]">
            <div className="absolute bottom-[-15px] right-[-20px] h-full w-full rounded-[85px] border border-blue bg-white"></div>
            <div className="md:px-[85px] relative w-fit rounded-[85px] bg-blue px-[15px] py-[47px] text-white">
              <X
                className="absolute right-10 top-5 cursor-pointer"
                onClick={() => dispatch(setModal(false))}
              />
              <h2 className="md:text-xl md:font-normal mx-auto text-center text-md font-bold leading-none">
                {status === 200
                  ? "Merci pour votre demande concernant la formation :"
                  : " Information du / des participants à la formation :"}
              </h2>
              <strong className="md:text-md mx-auto mb-[49px] flow-root w-fit text-center text-[25px] font-normal">
                {data.title}
              </strong>
              {status === 200 ? (
                <>
                  <Separator className="md:max-w-[320px] mx-auto mb-[25px] mt-[46px] max-w-[75%] bg-white" />
                  <h3 className="mx-auto max-w-[544px] text-center text-xl font-bold text-white">
                    Notre équipe reviendra vers vous dans les meilleurs délais
                  </h3>
                </>
              ) : (
                <Formik
                  initialValues={initialValues}
                  validationSchema={toFormikValidationSchema(schema)}
                  onSubmit={(values) => handleSubmit(values)}
                >
                  {({ errors, touched }) => (
                    <Form className="md:grid-cols-2 md:gap-y-[18px] grid grid-cols-1 gap-[10px] gap-x-[24px]">
                      <Field
                        name="formation"
                        value={data.title}
                        className="md:text-sm sr-only w-full rounded-32 border border-white bg-white px-[28px] py-[14px] text-[16px] font-normal text-blue placeholder:text-blue"
                      />
                      <div>
                        <Field
                          placeholder="Votre nom / Prénom*"
                          className={`${
                            errors.username && touched.username
                              ? "border-red"
                              : "border-white"
                          } md:text-sm w-full rounded-32 border bg-white px-[28px] py-[14px] text-[16px] font-normal text-blue placeholder:text-blue`}
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
                            errors.email && touched.email
                              ? "border-red"
                              : "border-white"
                          } font-regular md:text-sm w-full rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue`}
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
                            errors.society && touched.society
                              ? "border-red"
                              : "border-white"
                          } font-regular md:text-sm w-full rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue`}
                          name="society"
                        />
                        {errors.society && touched.society && (
                          <p className="ml-[20px] mt-[5px] text-red-700">
                            {errors.society}
                          </p>
                        )}
                      </div>
                      <div className="md:justify-center flex items-center justify-between gap-[63px]">
                        <label htmlFor="Participants">
                          Nombre de participant(s)
                        </label>
                        <Field
                          className={`${
                            errors.participants && touched.participants
                              ? "border-red"
                              : "border-white"
                          } font-regular md:text-sm w-full max-w-[90px] rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue`}
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
                          } font-regular md:text-sm w-full rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue`}
                          placeholder="Adresse*"
                          name="zipCode"
                        />
                        {errors.zipCode && touched.zipCode && (
                          <p className="ml-[20px] mt-[5px] text-red-700">
                            {errors.zipCode}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-2 md:grid-cols-[281px_1fr] md:justify-items-center md:w-fit mx-auto grid w-full items-center gap-[12px] desktop:gap-[50px]">
                        <p className="md:text-sm flow-root text-[16px] font-normal">
                          Mode de formation préférentiel* :{" "}
                        </p>
                        <div className="md:flex md:gap-0 md:justify-center grid grid-cols-2 items-center justify-items-start gap-x-[16px] gap-y-[25px]">
                          <label
                            htmlFor="presentiel"
                            className="md:text-sm mr-[47px] flex items-center justify-center gap-[10px] text-[16px] font-normal"
                          >
                            <Field
                              className={`${
                                errors.presence && touched.presence
                                  ? "border-red"
                                  : "border-white"
                              } font-regular md:text-sm rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue`}
                              type="radio"
                              name="presence"
                              id="presentiel"
                              value="Présentiel"
                            />
                            Présentiel
                          </label>
                          <label
                            htmlFor="distanciel"
                            className="md:text-sm mr-[47px] flex items-center justify-center gap-[10px] text-[16px] font-normal"
                          >
                            <Field
                              className={`${
                                errors.presence && touched.presence
                                  ? "border-red"
                                  : "border-white"
                              } font-regular md:text-sm rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue`}
                              type="radio"
                              name="presence"
                              id="distanciel"
                              value="Distanciel"
                            />
                            Distanciel
                          </label>
                          <label
                            htmlFor="sansPreference"
                            className="md:text-sm flex items-center justify-center gap-[10px] text-[16px] font-normal"
                          >
                            <Field
                              className={`${
                                errors.presence && touched.presence
                                  ? "border-red"
                                  : "border-white"
                              } font-regular md:text-sm rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue`}
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
                      <div className="md:col-span-2">
                        <Field
                          className={`${
                            errors.message && touched.message
                              ? "border-red"
                              : "border-white"
                          } font-regular md:text-sm md:min-h-[169px] min-h-[70px] w-full rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue`}
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
                      <div className="md:col-span-2 flex items-center gap-[10px]">
                        <Field
                          className={`${
                            errors.consent && touched.consent
                              ? "border-red"
                              : "border-white"
                          } font-regular md:text-sm rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue`}
                          type="checkbox"
                          name="consent"
                          id="consent"
                          placeholder="Informations complémentaires (secteur d'activité, date souhaitée, etc.)"
                        />
                        <label
                          htmlFor="consent"
                          className="font-sm text-regular"
                        >
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
                        className="md:col-span-2 md:justify-self-end h-fit w-fit cursor-pointer justify-self-center rounded-32 border border-yellow bg-yellow px-[25px] py-[15px] text-[26px] font-bold leading-snug text-black duration-300 ease-in-out hover:bg-transparent hover:text-yellow"
                      />
                    </Form>
                  )}
                </Formik>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactModal;
