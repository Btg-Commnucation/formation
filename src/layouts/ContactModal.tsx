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
  participants: z
    .number({
      required_error: "Le nombres de participants est requis",
      invalid_type_error: "Les participants doit être un chiffre ou nombres",
    })
    .positive({ message: "Le nombres de participants doit être supérieur à 0" })
    .gte(1, { message: "Le nombres de participants doit être supérieur à 0" })
    .int({
      message:
        "Le nombres de participants doit être un chiffre ou nombres rond",
    }),
  address: z.string({ required_error: "Votre adresse est requise" }),
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
    address: "",
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
    payload.set("address", values.address);
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
          <div
            className={`${
              status === 200 ? "mt-0" : "mt-[300px]"
            } relative mx-auto h-fit w-fit max-w-[90%] mobile:mt-0 desktop:w-[1110px]`}
          >
            <div className="absolute bottom-[-5px] right-[-5px] h-full w-full rounded-[10px] border border-blue bg-white tablet:bottom-[-15px] tablet:right-[-20px] tablet:rounded-[85px]"></div>
            <div className="relative w-fit rounded-[10px] bg-blue px-[15px] py-[47px] text-white tablet:rounded-[85px] md:px-[85px] desktop:w-full">
              <X
                className="absolute right-5 top-2 cursor-pointer tablet:right-20 tablet:top-5"
                onClick={() => dispatch(setModal(false))}
              />
              <h2
                className={`${
                  status === 200 ? "mt-[46px]" : ""
                } mx-auto text-center text-md font-bold leading-none md:text-xl md:font-normal`}
              >
                {status === 200
                  ? "Merci pour votre demande concernant la formation :"
                  : " Information du / des participants à la formation :"}
              </h2>
              <strong className="mx-auto mb-[49px] flow-root w-fit text-center text-[25px] font-normal md:text-md">
                {data.title}
              </strong>
              {status === 200 ? (
                <>
                  <Separator className="mx-auto mb-[25px] mt-[46px] max-w-[75%] bg-white md:max-w-[320px]" />
                  <h3 className="mx-auto mb-[46px] max-w-[544px] text-center text-[28px] font-bold leading-snug text-white tablet:text-xl">
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
                    <Form className="grid grid-cols-1 gap-[10px] gap-x-[24px] md:grid-cols-2 md:gap-y-[18px]">
                      <Field
                        name="formation"
                        value={data.title}
                        className="sr-only w-full rounded-32 border border-white bg-white px-[28px] py-[14px] text-[16px] font-normal text-blue placeholder:text-blue md:text-sm"
                      />
                      <div>
                        <Field
                          placeholder="Votre nom / Prénom*"
                          className={`${
                            errors.username && touched.username
                              ? "border-red"
                              : "border-white"
                          } w-full rounded-32 border bg-white px-[28px] py-[14px] text-[16px] font-normal text-blue placeholder:text-blue md:text-sm`}
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
                          } font-regular w-full rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue md:text-sm`}
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
                          } font-regular w-full rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue md:text-sm`}
                          name="society"
                        />
                        {errors.society && touched.society && (
                          <p className="ml-[20px] mt-[5px] text-red-700">
                            {errors.society}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-between gap-[63px] md:justify-start">
                        <label htmlFor="Participants">
                          Nombre de participant(s)
                        </label>
                        <Field
                          className={`${
                            errors.participants && touched.participants
                              ? "border-red"
                              : "border-white"
                          } font-regular w-full max-w-[90px] rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue md:text-sm`}
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
                            errors.address && touched.address
                              ? "border-red"
                              : "border-white"
                          } font-regular w-full rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue md:text-sm`}
                          placeholder="Adresse*"
                          name="address"
                        />
                        {errors.address && touched.address && (
                          <p className="ml-[20px] mt-[5px] text-red-700">
                            {errors.address}
                          </p>
                        )}
                      </div>
                      <div>
                        <Field
                          className={`${
                            errors.zipCode && touched.zipCode
                              ? "border-red"
                              : "border-white"
                          } font-regular w-full rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue md:text-sm`}
                          placeholder="Code postal*"
                          name="zipCode"
                        />
                        {errors.zipCode && touched.zipCode && (
                          <p className="ml-[20px] mt-[5px] text-red-700">
                            {errors.zipCode}
                          </p>
                        )}
                      </div>
                      <div className="mx-auto grid w-full items-center gap-[12px] md:col-span-2 md:w-fit md:grid-cols-[281px_1fr] md:justify-items-center desktop:gap-[50px]">
                        <p className="flow-root text-[16px] font-normal md:text-sm">
                          Mode de formation préférentiel* :{" "}
                        </p>
                        <div className="grid grid-cols-2 items-center justify-items-start gap-x-[16px] gap-y-[25px] md:flex md:justify-center md:gap-0">
                          <label
                            htmlFor="presentiel"
                            className="mr-[47px] flex items-center justify-center gap-[10px] text-[16px] font-normal md:text-sm"
                          >
                            <Field
                              className={`${
                                errors.presence && touched.presence
                                  ? "border-red"
                                  : "border-white"
                              } font-regular rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue md:text-sm`}
                              type="radio"
                              name="presence"
                              id="presentiel"
                              value="Présentiel"
                            />
                            Présentiel
                          </label>
                          <label
                            htmlFor="distanciel"
                            className="mr-[47px] flex items-center justify-center gap-[10px] text-[16px] font-normal md:text-sm"
                          >
                            <Field
                              className={`${
                                errors.presence && touched.presence
                                  ? "border-red"
                                  : "border-white"
                              } font-regular rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue md:text-sm`}
                              type="radio"
                              name="presence"
                              id="distanciel"
                              value="Distanciel"
                            />
                            Distanciel
                          </label>
                          <label
                            htmlFor="sansPreference"
                            className="flex items-center justify-center gap-[10px] text-[16px] font-normal md:text-sm"
                          >
                            <Field
                              className={`${
                                errors.presence && touched.presence
                                  ? "border-red"
                                  : "border-white"
                              } font-regular rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue md:text-sm`}
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
                          } font-regular min-h-[70px] w-full rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue md:min-h-[169px] md:text-sm`}
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
                      <div className="flex items-center gap-[10px] md:col-span-2">
                        <Field
                          className={`${
                            errors.consent && touched.consent
                              ? "border-red"
                              : "border-white"
                          } font-regular rounded-32 bg-white px-[28px] py-[14px] text-[16px] text-blue placeholder:text-blue md:text-sm`}
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
                        className="h-fit w-fit cursor-pointer justify-self-center rounded-32 border border-yellow bg-yellow px-[25px] py-[15px] text-[26px] font-bold leading-snug text-black duration-300 ease-in-out hover:bg-transparent hover:text-yellow md:col-span-2 md:justify-self-end"
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
