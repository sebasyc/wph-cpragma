import { Resend } from 'resend';
const resend = new Resend(import.meta.env.RESEND_API_KEY);
const recipientEmail = 'avergara@cpragma.com'; // Reemplaza con tu dirección de correo

export const prerender = false;
 
export async function POST({ request }) {
    try {
        const formData = await request.formData();
        const nombre = formData.get('nombre');
        const empresa = formData.get('empresa');
        const telefono = formData.get('telefono');
        const email = formData.get('email');
        const mensaje = formData.get('mensaje');

    if (!nombre || !email || !mensaje) {
        return new Response(JSON.stringify({ error: 'Por favor, completa todos los campos requeridos' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    
    const { data, error } = await resend.emails.send({
        from: 'cpragma <onboarding@resend.dev>', // Reemplaza con tu remitente verificado en Resend
        to: [recipientEmail],
        subject: `Nuevo mensaje de contacto desde tu sitio web`,
        html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        ${empresa ? `<p><strong>Empresa:</strong> ${empresa}</p>` : ''}
        ${telefono ? `<p><strong>Teléfono:</strong> ${telefono}</p>` : ''}
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>`,
    });
        
    if (error) {
        console.error('Error al enviar el correo:', error);
        return new Response(JSON.stringify({ error: 'Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente más tarde.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    return new Response(JSON.stringify({ message: 'Mensaje enviado correctamente.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });

    } catch (error) {
        console.error('Error inesperado:', error);
        return new Response(JSON.stringify({ error: 'Ocurrió un error inesperado.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }
}
