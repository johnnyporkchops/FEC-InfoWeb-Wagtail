#!/usr/bin/perl -w

use strict;
use CGI;
use warnings;



my $query  = new CGI;

# it is important to check the validity of the email address
# supplied by the user both to catch genuine (mis-)typing errors
# but also to avoid exploitation by malicious users who could
# pass arbitrary strings to sendmail through the "send_to"
# CGI parameter - including whole email messages
# unless (Email::Valid->address($query->param('send_to'))) {
#   print $query->header;
#   print "You supplied an invalid email address.";
#   exit;
# }


# my $from = $query->param('from');

# unless ($from) {
    
#   print $query->header();
#   print "Please fill in your email and try again";
# }

#my $file     = "issues.txt";
# open (FILE, ">>$file") or die "Cannot open $file: $!";
# print $to,"\n";
# close(FILE); 


 my $page  = $query->param('page');
 my $url= $query->param('url');
 my $share_sender  = $query->param('share_sender');
 my $share_with = $query->param('share_with');
 my $message = $query->param('message');
# my $url = $query->param('url');

open(MAIL, "|/usr/sbin/sendmail -t");
 
 # Email Header
print MAIL "To: $share_with\n";
print MAIL "To: $share_sender\n";
print MAIL "From: $share_sender\n";
print MAIL "Subject: $page\n\n";

# # Email Body
print MAIL $message." :"."\n"."Page:".$page."\n"."Url: ".$url;

close(MAIL);

#print $query->redirect('http://infoweb_rep');

print "Content-type: text/html.\n\n";
# print $query->header();
# print "Just for testing-jcarroll:\n";
# print "From: ".$sender_email."\n";
# print "Issue: ".$issue."\n";
# print "Issue Description: ".$issue_desc."\n";

# print "Confirmation of your submission will be emailed to you.";