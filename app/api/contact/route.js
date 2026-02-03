import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { fname, phone, email, message } = body;

        // Basic validation
        if (!fname || !phone || !email) {
            return NextResponse.json(
                { 
                    status: 'error', 
                    message: 'جميع الحقول مطلوبة' 
                },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { 
                    status: 'error', 
                    message: 'البريد الإلكتروني غير صالح' 
                },
                { status: 400 }
            );
        }

        // Here you would typically:
        // 1. Save to database
        // 2. Send email notification
        // 3. Integrate with CRM
        // For now, we'll just log and return success
        console.log('Contact form submission:', { fname, phone, email, message });

        return NextResponse.json(
            { 
                status: 'success', 
                message: 'تم إرسال رسالتك بنجاح' 
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { 
                status: 'error', 
                message: 'حدث خطأ أثناء معالجة طلبك' 
            },
            { status: 500 }
        );
    }
}
