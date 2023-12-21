import { Tarticle } from "@/features/posts/formationSlice";
import { X } from "lucide-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const validationSchema = z.object({
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

  return (
    <section className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white/[86%]">
      <div></div>
      <div className="relative w-fit rounded-32 bg-blue px-[85px] py-[47px] text-white">
        <X className="absolute right-5 top-5 cursor-pointer" />
        <h2 className="mx-auto text-center text-xl font-normal leading-none">
          Information du / des participants à la formation :
        </h2>
        <strong className="mx-auto mb-[49px] flow-root w-fit text-center text-md font-normal">
          {data.title}
        </strong>
        <Formik
          initialValues={initialValues}
          validationSchema={toFormikValidationSchema(validationSchema)}
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <Field
                  placeholder="Votre nom / Prénom*"
                  className={`${
                    errors.username && touched.username
                      ? "border-red"
                      : "border-black"
                  } text-black`}
                  name="username"
                />
                <ErrorMessage name="username" />
              </div>
              <div>
                <Field
                  placeholder="Email*"
                  className="text-black"
                  type="email"
                  name="email"
                />
                <ErrorMessage name="email" />
              </div>
              <div>
                <Field
                  placeholder="Société*"
                  className="text-black"
                  name="society"
                />
                <ErrorMessage name="society" />
              </div>
              <div>
                <label htmlFor="Participants">Nombre de participant(s)</label>
                <Field
                  className="text-black"
                  type="number"
                  name="participants"
                  min="1"
                />
                <ErrorMessage name="participants" />
              </div>
              <div>
                <Field
                  className="text-black"
                  placeholder="Adresse*"
                  name="addresse"
                />
                <ErrorMessage name="addresse" />
              </div>
              <fieldset>
                <legend>Mode de formation préférentiel* : </legend>
                <label htmlFor="presentiel">
                  <Field
                    className="text-black"
                    type="radio"
                    name="presence"
                    value="Présentiel"
                  />
                  Présentiel
                </label>
                <label htmlFor="distanciel">
                  <Field
                    className="text-black"
                    type="radio"
                    name="presence"
                    value="Distanciel"
                  />
                  Distanciel
                </label>
                <label htmlFor="sansPreference">
                  <Field
                    className="text-black"
                    type="radio"
                    name="presence"
                    value="Sans préférence"
                  />
                  Sans préférence
                </label>
              </fieldset>
              <div>
                <Field
                  className="text-black"
                  as="textarea"
                  name="message"
                  placeholter="Informations complémentaires (secteur d'activité, date souhaitée, etc.)"
                />
                <ErrorMessage name="message" />
              </div>
              <div>
                <Field
                  className="text-black"
                  type="checkbox"
                  name="consent"
                  placeholder="Informations complémentaires (secteur d'activité, date souhaitée, etc.)"
                />
                <label htmlFor="consent">
                  J’accepte que mes informations soient traitées et conservées
                  dans le cadre de ma demande de formation.
                </label>
                <ErrorMessage name="consent" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactModal;
