interface FourZIdentityResponse {
  's:Envelope': {
    's:Header': { 'authentication-header': { Token: string } };
    's:Body': {
      ValidateUserCredentialsResponse: {
        ValidateUserCredentialsResult: {
          'a:ErrorList': string | undefined | Record<string, never>;
          'a:Errors': string | undefined | Record<string, never>;
          'a:IsSuccess': string;
          'a:Value': {
            'b:AccessFailedCount': string;
            'b:AccessLevel': {
              'b:AccessLevelDescription': string;
              'b:AccessLevelID': string;
            };
            'b:Facilities': {
              'c:guid': string[];
            };
            'b:Franchises': {
              'c:FranchiseDTO': {
                'b:Errors': string | undefined | Record<string, never>;
                'c:Address': string | undefined | Record<string, never>;
                'c:AddressID': string | undefined | Record<string, never>;
                'c:CommercialName': string;
                'c:CubeRoleName': string | undefined | Record<string, never>;
                'c:Facilities': string | undefined | Record<string, never>;
                'c:FranchiseCode': string;
                'c:FranchiseContact': string | undefined | Record<string, never>;
                'c:FranchiseID': string;
                'c:IsActive': string;
                'c:LanguageCode': string | undefined | Record<string, never>;
              };
            };
            'b:IsActive': string;
            'b:IsGenericPassword': string;
            'b:IsLocked': string;
            'b:IsMultisessionAllowed': string;
            'b:IsSysUser': string;
            'b:PasswordHash': string | undefined | Record<string, never>;
            'b:RolesAssigneds': {
              'b:RoleDTO': {
                'b:AccessLevels': {
                  'b:AccessLevelDTO': {
                    'b:AccessLevelDescription': string;
                    'b:AccessLevelID': string;
                  };
                };
                'b:Autorizations': {
                  'b:AuthorizationDTO': {
                    'b:AutorizationDescription': string;
                    'b:AutorizationID': string;
                  }[];
                };
                'b:Facilitys': {
                  'c:FacilityDTO': {
                    'b:Errors': string | undefined | Record<string, never>;
                    'c:Address': string | undefined | Record<string, never>;
                    'c:AddressID': string | undefined | Record<string, never>;
                    'c:AllowActivityOutOfVisitTime': string | undefined | Record<string, never>;
                    'c:BankCardDigitNumbers': string | undefined | Record<string, never>;
                    'c:CommercialName': string;
                    'c:Currency': string | undefined | Record<string, never>;
                    'c:DefaultPOSSaleLimit': string | undefined | Record<string, never>;
                    'c:EnableAdmissionFee': string;
                    'c:FacilityCode': string;
                    'c:FacilityID': string;
                    'c:FacilitySize': string | undefined | Record<string, never>;
                    'c:FacilitySizeID': string;
                    'c:FacilityType': string | undefined | Record<string, never>;
                    'c:FacilityTypeID': string;
                    'c:FoliationTypeID': string;
                    'c:FranchiseID': string;
                    'c:FranchiseName': string | undefined | Record<string, never>;
                    'c:FundationDate': string | undefined | Record<string, never>;
                    'c:GlobalFolioPrefix': string | undefined | Record<string, never>;
                    'c:IsActive': string;
                    'c:IsActivityStampsAssignation': string;
                    'c:IsBankCardPrePrint': string;
                    'c:IsPassportPrintBeforeSale': string;
                    'c:IsUnlockedGeneralSale': string;
                    'c:LanguageCode': string | undefined | Record<string, never>;
                    'c:LocalizationsSettings': string | undefined | Record<string, never>;
                    'c:LoyaltyLaunchingDate': string | undefined | Record<string, never>;
                    'c:MetricSystemID': string;
                    'c:POSSaleLimitEnabled': string;
                    'c:PrintBoardingPass': string;
                    'c:PrintBracelet': string;
                    'c:PrintSaleReceipt': string;
                    'c:RentalsExternalURL': string | undefined | Record<string, never>;
                    'c:RoyaltyParameter': string | undefined | Record<string, never>;
                    'c:SignatureDate': string | undefined | Record<string, never>;
                    'c:SurveyTransactionNumber': string | undefined | Record<string, never>;
                    'c:TaxActivityLimit': string | undefined | Record<string, never>;
                    'c:UpdateDate': string | undefined | Record<string, never>;
                    'c:VisitorCapacity': string;
                    'c:WriteBraceletRFID': string;
                  };
                };
                'b:Franchises': Record<string, never>;
                'b:GroupTypes': {
                  'c:GroupTypeDTO': {
                    'b:Errors': string | undefined | Record<string, never>;
                    'c:GroupTypeCode': string | undefined | Record<string, never>;
                    'c:GroupTypeDescription': string;
                    'c:GroupTypeID': string;
                    'c:GroupTypeImage': string | undefined | Record<string, never>;
                    'c:GroupTypeOrder': string | undefined | Record<string, never>;
                    'c:IsActive': string;
                    'c:LanguageCode': string | undefined | Record<string, never>;
                  }[];
                };
                'b:IsActive': string;
                'b:IsMaster': string;
                'b:IsReadOnly': string;
                'b:IsSysAdmin': string;
                'b:Permission': string | undefined | Record<string, never>;
                'b:RoleDescription': string | undefined | Record<string, never>;
                'b:RoleID': string;
                'b:RoleName': string;
                'b:StoreTypes': {
                  'c:StoreTypeDTO': {
                    'c:IsActive': string;
                    'c:LanguageCode': string | undefined | Record<string, never>;
                    'c:StoreTypeDescription': string;
                    'c:StoreTypeID': string;
                    'c:UpdateDate': string;
                  }[];
                };
              };
            };
            'b:UserID': string;
            'b:UserName': string;
            'b:UserType': string;
          };
        };
      };
    };
  };
}

interface FourzGetCardWithoutVisitorResponse {
  's:Envelope': {
    's:Header': { messageFrom: { Action: string } };
    's:Body': {
      GetCardWithOutVisitorResponse: {
        GetCardWithOutVisitorResult: {
          'a:ErrorList': string | undefined | Record<string, never>;
          'a:Errors': string | undefined | Record<string, never>;
          'a:IsSuccess': string;
          'a:Value': {
            Errors: string | undefined | Record<string, never>;
            'b:Amount': string;
            'b:BankAccountID': string;
            'b:CreationDate': string;
            'b:FacilityID': string;
            'b:Investment': string | undefined | Record<string, never>;
            'b:IsPrinted': string;
            'b:NumberAccount': string;
            'b:PinAccount': string | undefined | Record<string, never>;
            'b:UpdateDate': string;
            'b:UserId': string;
            'b:UserName': string;
            'b:VisitorID': string | undefined | Record<string, never>;
          };
        };
      };
    };
  };
}
