from django.contrib.auth.tokens import PasswordResetTokenGenerator
import six

# A function to generate a unique token for email confirmation from user details
# We extend the inbuilt django token Generator used for password resets
# to generate a unique token for users by using our secret key
class TokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return (
            six.text_type(user.pk) + six.text_type(timestamp) +
            six.text_type(user.is_active)
        )

account_activation_token = TokenGenerator()