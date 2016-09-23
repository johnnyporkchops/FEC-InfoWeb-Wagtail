
/*
Tipue Search 5.0
Copyright (c) 2015 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"];


// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'javscript', 'replace_with': 'javascript'},
     {'word': 'jqeury', 'replace_with': 'jquery'}
]};


// Weighting

var tipuesearch_weight = {'weight': [
/*     {'url': 'http://infoweb.fec.gov/candidates.html', 'score': 200},
     {'url': 'http://infoweb.fec.gov/generic_trainings/affiliation_cand_nonconnect.html', 'score': 100}*/
]};


// Stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};

// Pages on site
var tipuesearch_pages = ["http://infoweb.fec.gov/all_committees/independent_expenditures.html","http://infoweb.fec.gov/all_committees/political_committee_defined.html","http://infoweb.fec.gov/all_committees/assets_of_committee.html","http://infoweb.fec.gov/nonconnected/leadership_pacs.html","http://infoweb.fec.gov/all_committees/partnerships.html","http://infoweb.fec.gov/candidates/employed_candidate.html","http://infoweb.fec.gov/corporate_labor/index.html","http://infoweb.fec.gov/all_committees/contributions_name_of_another.html","http://infoweb.fec.gov/party/federal_election_activity.html","http://infoweb.fec.gov/candidates/recounts_contested_elections.html","http://infoweb.fec.gov/all_committees/debts.html","http://infoweb.fec.gov/reporting/index.html","http://infoweb.fec.gov/all_committees/multicandidate_committees.html","http://infoweb.fec.gov/all_committees/affinity_programs.html","http://infoweb.fec.gov/candidates/transfers_btwn_authorized_committees.html","http://infoweb.fec.gov/index.html","http://infoweb.fec.gov/party/exempt_activities.html","http://infoweb.fec.gov/candidates/single_candidate_committees.html","http://infoweb.fec.gov/corporate_labor/member_definition.html","http://infoweb.fec.gov/all_committees/coordinated_communications.html","http://infoweb.fec.gov/party/coordinated_party_expenditures.html","http://infoweb.fec.gov/candidates/affiliation_cand_nonconnect.html","http://infoweb.fec.gov/all_committees/indian_tribes.html","http://infoweb.fec.gov/archive/honoraria.html","http://infoweb.fec.gov/corporate_labor/corp_labor_facilities_resources_employe…","http://infoweb.fec.gov/scripted_responses/index.html","http://infoweb.fec.gov/archive/millionaires_amendment.html","http://infoweb.fec.gov/party/index.html","http://infoweb.fec.gov/candidates/candidate_solicitation_nonfederal_funds.html","http://infoweb.fec.gov/candidates/draft_search_committees.html","http://infoweb.fec.gov/nonconnected/index.html","http://infoweb.fec.gov/corporate_labor/payroll_deduction.html","http://infoweb.fec.gov/candidates/legal_defense_funds_legal_fees.html","http://infoweb.fec.gov/corporate_labor/corp_labor_affiliation.html","http://infoweb.fec.gov/all_committees/index.html","http://infoweb.fec.gov/all_committees/federal_govt_contractors.html","http://infoweb.fec.gov/corporate_labor/twice_yearly.html","http://infoweb.fec.gov/index.html","http://infoweb.fec.gov/archive/index.html","http://infoweb.fec.gov/corporate_labor/connected_organizations.html","http://infoweb.fec.gov/all_committees/foreign_nationals.html","http://infoweb.fec.gov/nonconnected/admin_expenses_nonconnected.html","http://infoweb.fec.gov/all_committees/joint_rentals_purchases.html","http://infoweb.fec.gov/candidates/index.html","http://infoweb.fec.gov/corporate_labor/corp_labor_communications.html","http://infoweb.fec.gov/candidates/debates.html","http://infoweb.fec.gov/party/party_reporting.html","http://infoweb.fec.gov/corporate_labor/collecting_agents.html","http://infoweb.fec.gov/candidates/campaign_activities.html","http://infoweb.fec.gov/nonconnected/hybrid_pacs.html","http://infoweb.fec.gov/candidates/family_of_candidate.html","http://infoweb.fec.gov/candidates/family_of_candidate.html","http://infoweb.fec.gov/party/party_nonfederal_levin_solicitation.html","http://infoweb.fec.gov/corporate_labor/cooperatives.html","http://infoweb.fec.gov/all_committees/electioneering_communications.html","http://infoweb.fec.gov/corporate_labor/exec_admin_personnel.html","http://infoweb.fec.gov/all_committees/deposit_investment_of_funds.html","http://infoweb.fec.gov/candidates/coattail_support.html","http://infoweb.fec.gov/archive/biennial_contribution_limit.html","http://infoweb.fec.gov/candidates/exploratory_activities.html","http://infoweb.fec.gov/reporting/reporting_authorized.html","http://infoweb.fec.gov/corporate_labor/use_treasury_funds_ssf.html","http://infoweb.fec.gov/all_committees/index.html","http://infoweb.fec.gov/party/party_conventions.html","http://infoweb.fec.gov/candidates/public_funding_presidential.html","http://infoweb.fec.gov/corporate_labor/combined_payments.html","http://infoweb.fec.gov/agency_guidelines/index.html","http://infoweb.fec.gov/all_committees/credit_cards_forms_of_payment.html","http://infoweb.fec.gov/candidates/use_of_campaign_funds.html","http://infoweb.fec.gov/all_committees/liability_for_violations.html","http://infoweb.fec.gov/party/party_affiliation.html","http://infoweb.fec.gov/candidates/ballot_access.html","http://infoweb.fec.gov/candidates/travel.html","http://infoweb.fec.gov/candidates/earmarking_lobbyist_bundling.html","http://infoweb.fec.gov/candidates/transition.html","http://infoweb.fec.gov/reporting/pac_reporting.html","http://infoweb.fec.gov/party/allocation_party.html","http://infoweb.fec.gov/all_committees/disclaimers.html","http://infoweb.fec.gov/corporate_labor/conventions_meetings.html","http://infoweb.fec.gov/party/delegate.html","http://infoweb.fec.gov/corporate_labor/solicitation_notices.html","http://infoweb.fec.gov/corporate_labor/TradeAssociations.html","http://infoweb.fec.gov/candidates/joint_fundraising.html","http://infoweb.fec.gov/corporate_labor/labor_use_of_corp_solicitation_methods.html","http://infoweb.fec.gov/all_committees/allocation_nonparty_committees.html","http://infoweb.fec.gov/candidates/redistricting.html","http://infoweb.fec.gov/party/party_committee_definition.html","http://infoweb.fec.gov/candidates/election_definition_limitations.html","http://infoweb.fec.gov/all_committees/commercial_transactions.html","http://infoweb.fec.gov/candidates/loans.html","http://infoweb.fec.gov/all_committees/limited_liability_companies.html","http://infoweb.fec.gov/party/building_funds.html","http://infoweb.fec.gov/corporate_labor/stockholder.html","http://infoweb.fec.gov/corporate_labor/federal_ssfs_state_pacs.html","http://infoweb.fec.gov/all_committees/lobbying.html","http://infoweb.fec.gov/corporate_labor/SSF_info_internal_pubs.html","http://infoweb.fec.gov/corporate_labor/natl_banks_fed_chartered_corps.html"];



// Internal strings

var tipuesearch_string_1 = 'No title';
var tipuesearch_string_2 = 'Showing results for';
var tipuesearch_string_3 = 'Search instead for';
var tipuesearch_string_4 = '1 result';
var tipuesearch_string_5 = 'results';
var tipuesearch_string_6 = 'Prev';
var tipuesearch_string_7 = 'Next';
var tipuesearch_string_8 = 'Nothing found';
var tipuesearch_string_9 = 'Common words are largely ignored';
var tipuesearch_string_10 = 'Search too short';
var tipuesearch_string_11 = 'Should be one character or more';
var tipuesearch_string_12 = 'Should be';
var tipuesearch_string_13 = 'characters or more';
