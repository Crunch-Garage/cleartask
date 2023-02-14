import re
from django.contrib.sites.models import Site
from django.urls import reverse
from django.core.mail import send_mail

site_name = Site.objects.get_current().name
site_domain = Site.objects.get_current().domain
# check valid email
def email_is_valid(email):
    email_regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    if re.fullmatch(email_regex, email):
        return True
    else:
        return False

def send_email(email, uid, token):
    # Create a url we will attach in the email
    url = f"http://{site_domain}" + reverse( 'accounts-apis:activate_account', kwargs={'uid':uid, 'token':token})	

    # Other email stuff
    subject = "Verify your email" 
    message = f"Get started on {site_name} by verifying your email.\nClick this link to continue: {url}"
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