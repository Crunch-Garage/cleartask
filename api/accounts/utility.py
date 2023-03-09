import re
from django.contrib.sites.models import Site
from django.urls import reverse
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from rest_framework_simplejwt.tokens import RefreshToken

site_name = Site.objects.get_current().name if Site.objects.get_current().name else "example.com"
site_domain = Site.objects.get_current().domain if Site.objects.get_current().name else "example.com"
# check valid email
def email_is_valid(email):
    email_regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    if re.fullmatch(email_regex, email):
        return True
    else:
        return False

def send_email(email, uid, token):
    # Create a url we will attach in the email
    """
        Since requests are passed by the react app via api calls we construct a url
        that take the user to the react app as defined in the nginx.conf file.
        The url will carry our uuid and token and the react app will handle things from there.
        We comment the django based url and use the react url
    """
    # url = f"http://{site_domain}" + reverse( 'accounts-apis:activate_account', kwargs={'uid':uid, 'token':token})	
    
    url = f"http://{site_domain}/auth/activate_account/?uid={uid}&token={token}"

    # Other email stuff
    subject = "Verify your email" 
    message = f"Get started on {site_name} by verifying your email.\nClick this link to continue: {url}"
    try:
        plainMessage =  f"Get started on {site_name} by verifying your email.\nClick this link to continue: {url}"

        context = {
                'message': "Thank you for creating an account with Cleartask. Get started by verifying your account.",
                'url':url,
                'site_domain':site_domain
                }
        htmlMessage = render_to_string('accounts/verify_email_template.html', context)

        message = EmailMultiAlternatives(subject,plainMessage,'', [email])
        message.attach_alternative(htmlMessage, "text/html")
        message.send()

        return True
    except Exception as e:
        print(e)
        return False

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }