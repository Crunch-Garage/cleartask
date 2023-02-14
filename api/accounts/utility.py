import re
from django.contrib.sites.models import Site
from django.core.mail import send_mail

site_name = Site.objects.get_current().name

# check valid email
def email_is_valid(email):
    email_regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    if re.fullmatch(email_regex, email):
        return True
    else:
        return False

def send_email(email):
    subject, message = "Verify your email", f"Get started on {site_name} by verifying your email"
    try:
        send_mail(
            subject,
            message,
            '',
            [email],
            fail_silently=False,
        )
        return True
    except Exception as e:
        print(e)
        return False